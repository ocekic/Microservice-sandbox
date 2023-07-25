import Thing from '../models/things.model';

exports.createThing = async (req, res) => {
    
    const thing = new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price,
    });

    const Thingsave = await thing.save().then(thing => {
        res.status(200).json(thing);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

exports.getThings = async (req, res) => {
    await Thing.find({}).then((things) => {
        res.status(200).json(things);
    }).catch((err) => {
        res.status(500).send(err);
    });
}
