import { toast } from "react-toastify";

const getBlogs = () => {
    let blogs = [];
    const storedBlogs = localStorage.getItem('blogs');
    if(storedBlogs){
        blogs= JSON.parse(storedBlogs);
    } 
    return blogs;
}

const saveBlog = (blog) => {
    let blogs = getBlogs();
    const duplicateBlogs = blogs.find(b => b.id===blog.id );
    if(!duplicateBlogs){
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
        return 1;
    }
    else{
        return 0;
    }
}

const deleteBlog = (id) => {
    const blogs = getBlogs();
    const remainingBlogs = blogs.filter(b=> b.id !== id)
    console.log(remainingBlogs);
    localStorage.setItem('blogs', JSON.stringify(remainingBlogs))
    toast("Blog Removed Form Bookmark!",{
        position:"top-center"
    });
}

export { deleteBlog, getBlogs, saveBlog };

