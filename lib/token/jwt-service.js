const jwt = require('jsonwebtoken');
const { refreshModel } = require('../../api/model');

const consumerTokenSecret = process.env.CONSUMER_JWT_SECRET;
const refrestTokenSecret = process.env.JWT_REFRESH_SECRET;
const tempTokenSecret = process.env.TEMP_SECRET;
const proxyTokenSecret = process.env.JWT_PROXY_SECRET;

class TokenService {
    generateAuthTokens(payload) {
        const accessTokenOptions = { algorithm: 'HS256', expiresIn: '5hr' };
        const refreshTokenOptions = { algorithm: 'HS256', expiresIn: '30d' };


        const accessToken = jwt.sign(payload, consumerTokenSecret, accessTokenOptions);
        const refreshToken = jwt.sign(payload, refrestTokenSecret, refreshTokenOptions);

        return { accessToken, refreshToken };
    }

    genrateTempToken(payload,time='1hr') {
        const accessTokenOptions = { algorithm: 'HS256', expiresIn: time };
        const tempToken = jwt.sign(payload, tempTokenSecret, accessTokenOptions);
        return tempToken;
    }



    async storeRefreshToken(token, userId) {
        try {
            const resp = await refreshModel.findOneAndUpdate({ userId }, { token }, { new: true, upsert: true });
            return resp;
        } catch (err) {
            throw err;
        }
    }

    async updateRefreshToken(userId, refreshToken) {
        return await refreshModel.updateOne(
            { userId: userId },
            { token: refreshToken }
        );
    }
    
    async findRefreshToken(userId, refreshToken) {
        return await refreshModel.findOne({
            userId: userId,
            token: refreshToken,
        });
    }

    async verifyTempToken(token) {
        return jwt.verify(token, tempTokenSecret);
    }

    async verifyAccessToken(token) {
        return jwt.verify(token, consumerTokenSecret);
    }

    async verifyRefreshToken(token) {
        return jwt.verify(token, refrestTokenSecret);
    }

    async verifyProxyToken(token) {
        return jwt.verify(token, proxyTokenSecret);
    }
}


module.exports = new TokenService();