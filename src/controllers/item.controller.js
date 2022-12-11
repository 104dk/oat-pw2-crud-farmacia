const Item = require('../models/item.model')

const Salvar = async(req,res,next) => {
    try{
        const data = req.body;
        const novoItem = new Item(data)
        const ItemSalvo = await novoItem.save()

        if(!ItemSalvo){
            throw new Error("Item nao pode ser salvo.")
        }
        res.status(201).json({message: `Novo item criado. `})
    } catch(err){
        next(err)
    }
}

const ObterTodos = async(req, res, next)=>{
    try{
        const items = await Item.find()
        res.status(200).json(items)
    } catch(err){
        next(err)
    }
}


const ObterPorId = async(req,res,next) => {
    try{
        const id = req.params.id
        const items = await Item.findById(id)

        if(!items){
            throw new Error(`Item com id ${id} nao encontrado`)
        }
        res.status(200).json(items)

    } catch(err){
        next(err)
    }
}

const Atualizar = async (req,res,next) => {
    try{
        const id = req.params.id
        const data = req.body

        const items = await Item.findById(id)
        if(!items){
            throw new Error(`Item com id ${id} nao encontrado`)
        }

        const itemNovo = await Item.findByIdAndUpdate(id,data, {new: true})
        res.status(200).json(itemNovo)

    } catch(err){
        next(err)
    }
}

const Remover = async (req,res,next) => {
    try{
        const id = req.params.id
        const items = await Item.findById(id)
        if(!items){
            throw new Error(`Item com id ${id} nao encontrado`)
        }

        await Produto.findByIdAndDelete(id)
        res.status(200).json({message: `Item com id ${id} foi deletado`})
    } catch(err){
        next(err)
    }
}

module.exports = {
    Salvar,
    ObterTodos,
    ObterPorId,
    Atualizar,
    Remover    
}