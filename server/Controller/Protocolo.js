const Protocolo = require('../Model/Protocolo');

module.exports = {
    async index(req, res){
        //busca todos os registros
        let protocolo = await Protocolo.find() ;
        return res.json(protocolo);
    },

    async show(req, res){
        let protocolo = await Protocolo.findOne({ _id : req.params.id });
        return res.json( protocolo) ;
    },

    async store(req, res){
        const protocolo = req.body.protocolo;
        let protocolos = await Protocolo.findOne({protocolo});
        if(!protocolos){
            protocolos = await Protocolo.create({protocolo});
        }
        return res.json(protocolos);
    },

    //update pega o id, busca no banco esse registro, alerta ele no controlador e manda gravar
    async update(req, res){
        //recuperando o registro
        let protocolos = await Protocolo.findOne({ _id : req.params.id});
        
        protocolos.protocolo = req.body.protocolo;
        // //edito os registro 
        protocolos = await Protocolo.update(protocolos);
        return res.json(protocolos);
    }, 

    async destroy(req, res){
        let protocolo = await Protocolo.deleteOne({_id : req.params_id});
        return res.json(protocolo);
    }
  };