exports.getNowTime = (req, res) => {
    try {

        const { id } = req.query;
        
        if (!id) throw 'Id not found';
        
        const date = new Date();
        const arr = [date.getHours(), date.getMinutes()];
        const parseDate = arr.map((x) => x < 10 ? "0" + x : x).join(":");
        res.status(200).send({ nowDate: parseDate });
    } catch (e) {
        const error = new Error(e);
        res.status(500).send({ error: error.message });
    }
}