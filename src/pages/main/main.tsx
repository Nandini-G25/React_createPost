import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import { Post } from "./post";

export interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Main = () => {
    const [postList, setPostList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts");

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
        );
    };

    useEffect(() => {
        getPosts();
    }, []);
    return <div>{postList?.map((post) => (
        <Post post={post} />
        ))}
    </div>
};



 