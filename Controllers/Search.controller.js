const Books=require("../Models/Books.model")

exports.searchbooks=async(req,res)=>{
    try {
        const query = {};
        if (title) query.title = new RegExp(title, 'i');
        if (author) query.author = new RegExp(author, 'i');
        if (genre) query.genre = new RegExp(genre, 'i');
        if (publishedYear) query.publishedYear = publishedYear;
    
        const books = await Books.find(query);
        res.json(books);
    }
    catch (error) {
        res.status(500).json({ message: 'Error occurred while searching for books.', error });
    }
}

