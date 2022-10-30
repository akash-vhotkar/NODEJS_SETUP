const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const crypto = require("crypto");
const fs = require("fs");


const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_S3_ACCESS_KEY;
const secretAccessKey = process.env.AWS_S3_ACCESS_KEY_SECRET;



const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const randomImageName = (byte = 32) => {
  return crypto.randomBytes(byte).toString("hex");
};

const makeBufferData = async (fileinfo) => {
  try {
    return new Promise((resolve, reject) => {
      fs.readFile(fileinfo.path, (err, data) => {
        if (err) reject(err);
        fs.unlink(fileinfo.path, async function (err) {
          if (err) reject(err);
          resolve({ data: data, fileName: fileinfo.filename, mimetype: fileinfo.mimetype });
        });
      })
    })
  } catch (error) {
    console.log(error);
    throw new Error(error)
  }
}

function uploadFile(fileBuffer, fileName, mimetype) {
  const uploadParams = {
    Bucket: bucketName,
    Body: fileBuffer,
    Key: fileName,
    ContentType: mimetype,
  };
  return s3Client.send(new PutObjectCommand(uploadParams));
}

function deleteFile(fileName) {
  const deleteParams = {
    Bucket: bucketName,
    Key: fileName,
  };
  return s3Client.send(new DeleteObjectCommand(deleteParams));
}

async function getObjectSignedUrl(key, seconds = 3600) {
  try {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    const command = new GetObjectCommand(params);

    const url = await getSignedUrl(s3Client, command, { expiresIn: seconds });

    return url;
  } catch (error) {
    return "";
  }
}

module.exports = {
  uploadFile,
  deleteFile,
  getObjectSignedUrl,
  randomImageName,
  makeBufferData,
};
