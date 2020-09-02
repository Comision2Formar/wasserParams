let dbProducto = require('../data/database')


module.exports={

    categorias:function(req,res){

        let cat=req.params.cat

        let productos = dbProducto.filter(producto=>{
            return producto.category == cat
        })
       
         res.render('categorias',{
            title: "WASSER",
            productos:productos
        })
    }
    
}
