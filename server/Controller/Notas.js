const Notas = require('../Model/Notas');

module.exports = {
    async index(req, res){
        let notas = await Notas.find();
        return res.json(notas);
    },
    async show(req, res){
        let notas = await Notas.findOne({ _id : req.params.id });
        return res.json(notas) ;
    },
    async store(req, res){
        await Notas.create({
            user_id : req.body.user_id,
            materia_id : req.body.materia_id,
            primeiroBim : req.body.primeiroBim,
            segundoBim : req.body.segundoBim,
            terceiroBim : req.body.terceiroBim,
            quartoBim : req.body.quartoBim
        });
        // await notas.populate('users').populate('materia').execPopulate();

        return res.status(200).json({success : "Notas cadastradas"})
    },
    async update(req, res){
        await Notas.update({
            user_id : req.body.user_id,
            materia_id : req.body.materia_id,
            primeiroBim : req.body.primeiroBim,
            segundoBim : req.body.segundoBim,
            terceiroBim : req.body.terceiroBim,
            quartoBim : req.body.quartoBim
        });
        await Notas.updateOne({ _id : req.params.id }, notas).then(result => {
            return res.status(202).json({message : "Notas atualizadas"})
        });
            
    },
    async destroy(req, res){
        await Notas.deleteOne({ _id : req.params.id });
        return res.status(202).json({success : "Notas destruidas ;( "})
    },
}