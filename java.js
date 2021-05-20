class Publication{
    constructor(id,author,name,content,created){
        this.id= id
        this.author =author
        this.name=name
        this.content=content
        this.created=created
    }
    info(){
        console.log("This Publication is '",this.id,"'",this.name,"from",this.author)
    }
}
class Blogpost extends Publication{
    constructor(id,author,name,content,created,edited,address){
        super(id,author,name,content,created)
        this.edited = edited
        this.address = address
    }
}
class Book extends Publication{
    constructor(id,author,name,content,created,ISBN){
        super(id,author,name,content,created)
        this.ISBN = ISBN
    }
}
class Score extends Publication{
    constructor(id,author,name,content,created,score){
        super(id,author,name,content,created)
        this.score = score
    }
}

const babara_blog = new Blogpost("1","Babara","The tales of babara","it tells of babara",new Date(),"Horst","Im Düsselweg 5")
const babara_book = new Book("2","Babara","The tales of babara / The Book","it tells of babara",new Date(),"978-3-16-148410-0")
const babara_score = new Score("3","Babara","The tales of babara / Bestseller","it tells of babara",new Date(),"A+")
babara_blog.info()
babara_book.info()
babara_score.info()
const jack_blog = new Blogpost("4","Jack","The tales of Jack","It tells of Jack",new Date(),"Horst","Im Düsselweg 5")
const jack_book = new Book("5","Jack","The tales of Jack / The Book","it tells of Jack",new Date(),"978-3-16-148410-0")
const jack_score = new Score("6","Jack","The tales of Jack / Bestseller","it tells of Jack",new Date(),"A+")
jack_blog.info()
jack_book.info()
jack_score.info()
const Clint_blog = new Blogpost("7","Clint","The tales of Clint","It tells of Clint",new Date(),"Horst","Im Düsselweg 5")
const Clint_book = new Book("8","Clint","The tales of Clint / The Book","it tells of Clint",new Date(),"978-3-16-148410-0")
const Clint_score = new Score("9","Clint","The tales of Clint / Bestseller","it tells of Clint",new Date(),"A+")
Clint_blog.info()
Clint_book.info()
Clint_score.info()