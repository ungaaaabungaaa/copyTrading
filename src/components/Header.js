import { useNavigate } from 'react-router-dom';
import '../styles/header.css'
import { getAuth, signOut } from 'firebase/auth';
import { useAuth } from '../contexts/AuthContext';
import { useSnackbar } from '../components/Snackbar';
import Ticker from '../components/Ticker';

const Header = () => {


 

    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const auth = getAuth();
    const showSnackbar = useSnackbar();

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/login');
        showSnackbar('logged Out !');
    };


    const handleDashboardClick = () => {
        if (currentUser) {
            navigate('/dashboard');
        } else
        {
            navigate('/signup');
        }
    };
    

    const handleCompoundClick = () => {
        navigate('/compound');
    };

    const handleInvestingClick = () => {
        navigate('/investing');
    };

    const handleWeb3Click = () => {
        window.location.href = 'https://www.google.com';
    };


    return (
        <>
       
        <Ticker></Ticker>
        <div className='header_section'>
            <div className='Header_logo' onClick={() => navigate('/')}>
                <h3>Trades<span className='highlight'>Hub</span></h3>
            </div>
            
            <div className='header_buttons'>
                <button className='header_button' onClick={handleDashboardClick}>Dashboard</button>
                <button className='header_button' onClick={handleCompoundClick}>MultiplX</button>
                <button className='header_button' onClick={handleInvestingClick}>Earning Pool</button>
                <button className='header_button' onClick={handleWeb3Click}>Web3</button>
            </div>
            <div className='header_login'>
                {currentUser ? (
                    <>
                        <button className='header_login_button' onClick={() => navigate('/profile')}>Profile</button>
                        <br/>
                        <button className='header_button2' onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <button className='header_login_button' onClick={() => navigate('/login')}>Login</button>
                        <br/>
                        <button className='header_button2' onClick={() => navigate('/signup')}>Signup</button>
                    </>
                )}
            </div>
        </div>
        </>
    );
};

export default Header;
