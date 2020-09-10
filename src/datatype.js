exports.checkDataType = (req,res,next) => {
    const {num1,num2} = req.body;

    if(isNaN(num1) || isNaN(num2))
    {
        return res.json({
            status: `error`,
            message: `Invalid data type`,
        });
    }

    next();
}