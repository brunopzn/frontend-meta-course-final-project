import Footer from '../Footer';
import Header from '../Header';
import style from './Login.module.css'
function Login() {
    const handleSubmit = (e) => {
            e.preventDefault();
            
        };
    return (
        <>
        <Header/>
        <div className={style.login}>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail</label>
                <input type='email' name='email' required/>
                <label htmlFor="password">Password</label>
                <input type='password' name='password' required/>
                <div className={style.btnDiv}>
                    <button className={style.btn} type='submit'>Log in</button>
                    <button className={style.btn} type='submit'>Sign up</button>
                </div>
            </form>
        </div>
        <Footer/>
        </>
    )
}

export default Login;