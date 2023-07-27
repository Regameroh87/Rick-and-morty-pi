var myFavorites = [];

function postFav (req,res){
    myFavorites.push(req.body)
    res.status(200).json(myFavorites)
}

function deleteFav (req, res){
    const { id } = req.params;
    myFavorites = myFavorites.filter((char) => Number(id) !== char.id)
    res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}