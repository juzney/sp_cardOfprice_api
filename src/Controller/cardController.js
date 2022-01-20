const Card = require('../Model/CardInfo');


module.exports = {
    
    async Store(req, res){
        const { packageName, packageCategory, price, packageStatus,  website, optimization, uiComponents, templates,  landingPges, emailAcconts, emailMarketing, marketingAutomation, marketingContent, subdomains, hostings, storageType, updates, supports} = req.body
    
        try{
            const card = new Card({
                packageName, packageCategory, price, packageStatus,  website, optimization, uiComponents, templates,  landingPges, emailAcconts, emailMarketing, marketingAutomation, marketingContent, subdomains, hostings, storageType, updates, supports
            })
            const response = await card.save()
            return res.json(response)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "card unsaved" })
            
        }
    },

    async Index(req, res){
    
        try{
           
            const card = await Card.find(req.body)
            return res.json(card)
            
        } catch (erro)
        {
            return res.status(400).send({ "erro": "card unListed" })
           
        }
    },

    async IndexOne(req, res){
    
        try{
			const card = await Card.findOne({_id:req.params.id});
			res.send(card)
		}catch(erro){
			return res.status(400).send({"error": "falha ao listar card"})
		}
    },

    async DeleteOne(req, res){
		try{
			const card = await Card.deleteOne({_id:req.params.id});
			res.send({"message": "card apagado com sucesso"})

		}catch(erro){
			return res.status(400).send({"error": "falha ao Deletar card"})
		}
	}
}