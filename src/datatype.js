exports.checkDataType = (req,res,next) => {
    const {number1,number2} = req.body;

    if(isNaN(number1) || isNaN(number2))
    {
        return res.json({
            status: `error`,
            message: `Invalid data type`,
        });
    }

    next();
}