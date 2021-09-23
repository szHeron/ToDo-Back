const Note = require('../models/NoteData');

module.exports = {
    async create(req,res){
        const {title, type, done, createAt} = req.body;
        
        if(!title || !type){
            return res.status(400).json({
                error: "Está faltando parâmetros!"
            });
        }
        try{
            const noteCreated = await Note.create({
                title,
                type,
                done,
                createAt: !createAt?Date.now():createAt
            });

            return res.json(noteCreated);
        }catch(error){
            return res.status(400).json({error});
        }
    },

    async read(req,res){
        const noteList = await Note.find();
        return res.json(noteList);
    },

    async update(req,res){
        const { id } = req.params;
        const dataUpdated = req.body;

        const noteUpdated = await Note.findByIdAndUpdate({_id: id}, dataUpdated);

        if(noteUpdated){
            return res.json(noteUpdated);
        }else{
            return res.status('401').json({error: 'Não foi encontrado o registro solicitado!'});
        }
    },

    async delete(req,res){
        const { id } = req.params;

        const noteDeleted = await Note.findOneAndDelete({_id: id});

        if(noteDeleted){
            return res.json(noteDeleted);
        }else{
            return res.status('401').json({error: 'Não foi encontrado o registro solicitado!'});
        }
    }
}