import Thing from '../models/things.model';

exports.createThing = async (req, res) => {
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price,
    });
    await thing.save((err ,thing) => {
        if(err){
            res.status(500).send(err);
        }
        res.status(200).json(thing);
    });
}

exports.getThings = async (req, res) => {
    await Thing.find((err, thing) =>{
        if (err){
            res.status(404).send(err);
        }
        res.status(200).json(thing)
    })
}
