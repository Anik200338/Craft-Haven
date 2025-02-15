import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state || '/';

  const handleSocialLogin = socialProvider => {
    socialProvider()
      .then(result => {
        if (result.user) {
          toast.success('Login successful!');
          navigate(from);
        } else {
          toast.error('Social login failed. Please try again.'); // Display error message
        }
      })
      .catch(error => {
        toast.error('An error occurred during social login.'); // Display error message
      });
  };
  return (
    <>
      <div className="divider"> continue with</div>
      <div className="flex justify-center gap-5">
        <button
          onClick={() => handleSocialLogin(googleLogin)}
          className="btn btn-info  rounded-full btn-outline text-lg"
        >
          <FaGoogle />{' '}
        </button>
        <button
          onClick={() => handleSocialLogin(githubLogin)}
          className="btn btn-info  btn-outline rounded-full text-lg"
        >
          <FaGithub />{' '}
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
