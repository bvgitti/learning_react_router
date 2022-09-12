import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    return (
        <nav>
            <h3>Nav Bar</h3>
            <button onClick={()=> navigate('/')}>Home</button>
            <button onClick={()=> navigate('post')}>Post page</button>
            <button onClick={()=> navigate('post/new')}>New post</button>
            <button onClick={()=> navigate('about')}>About</button>
            <button onClick={()=> navigate('missing')}>Missing</button>
        </nav>
    )
};