import { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mainContext } from '../context/MainContext';


export default function WelcomeScreen() {
  // Add CSS for global styles that can't be included in the component
  const globalStyles = `
    @keyframes wave {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    .wave-slow {
      animation: wave 1 linear infinite;
    }
    
    .wave-slower {
      animation: wave 20s linear infinite reverse;
    }
  `;
  const [isSignIn, setIsSignIn] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    rememberMe: false
  });
  const { setUser, setToken } = useContext(mainContext);
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isSignIn) {
      if (!formData.name) {
        newErrors.name = 'Name is required';
      }
      
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
  
    setIsLoading(true);
    setMessage({ text: '', type: '' });
  
    try {
      const endpoint = isSignIn
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';
  
      const dataToSend = {
        email: formData.email,
        password: formData.password,
        ...(isSignIn ? { rememberMe: formData.rememberMe } : { name: formData.name })
      };
  
      const response = await axios.post(endpoint, dataToSend);
  
      // Handle response
      setMessage({
        text: isSignIn ? 'Login successful!' : 'Account created successfully!',
        type: 'success'
      });
      setIsLoading(false);

        if (response.data?.token) {
             setToken(response.data.token);
             setUser(response.data.user);
             
             localStorage.setItem('token', response.data.token);
            //  localStorage.setItem('user', JSON.stringify(response.data || {}));
     
           
             navigate('/'); // Ensure you have `useNavigate`
           } else {console.log('Login failed:', response.data.message);}
           

      // You may also want to store token or redirect user here
      localStorage.setItem('token', response.data.token);
      
      navigate('/projects/create');
  
    } catch (error) {
      console.error('Authentication error:', error);
      const errMsg = error.response?.data?.message || error.message || 'An error occurred';
      setMessage({ text: errMsg, type: 'error' });
      setIsLoading(false);
    }
  };
  

  const toggleMode = () => {
    setIsSignIn(!isSignIn);
    setErrors({});
    setMessage({ text: '', type: '' });
  };

  // SVG Wave Pattern for background - more detailed and matching the screenshot
  const WaveBackground = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Main wave pattern */}
      <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1200 1000" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0,800 C300,683.33 600,625 900,625 C1200,625 1500,683.33 1800,800 L1800,1000 L0,1000 Z" 
          fill="rgba(255, 255, 255, 0.2)"
        />
        <path 
          d="M0,850 C300,783.33 600,750 900,750 C1200,750 1500,783.33 1800,850 L1800,1000 L0,1000 Z" 
          fill="rgba(255, 255, 255, 0.12)"
        />
        <path 
          d="M0,900 C300,866.67 600,850 900,850 C1200,850 1500,866.67 1800,900 L1800,1000 L0,1000 Z" 
          fill="rgba(255, 255, 255, 0.08)"
        />
      </svg>
      
      {/* Particle dots pattern */}
      <div className="absolute inset-0 opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="15" cy="15" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>
    
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden">
        <svg className="absolute w-full h-auto wave-slow" style={{ bottom: '-10px' }} viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,0 C150,40 300,60 450,60 C600,60 750,40 900,0 C1050,-40 1200,-60 1350,-60 C1500,-60 1650,-40 1800,0 V120 H0 Z" 
            fill="rgba(255, 255, 255, 0.07)"
          />
        </svg>
        <svg className="absolute w-full h-auto wave-slower" style={{ bottom: '10px' }} viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0,120 C150,80 300,60 450,60 C600,60 750,80 900,120 C1050,160 1200,180 1350,180 C1500,180 1650,160 1800,120 V240 H0 Z" 
            fill="rgba(255, 255, 255, 0.05)"
          />
        </svg>
      </div>
    </div>
  );

  // Ques.AI Logo Component
  const QuesAILogo = ({ className = "", color = "white" }) => (
    <div className={`flex items-center ${className}`}>
      <svg className="w-24 h-24 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.03 3 3 7.03 3 12V19H5V12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19H5V21H12C17.97 21 22 16.97 22 12C22 7.03 17.97 3 12 3ZM7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7C9.24 7 7 9.24 7 12ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z" fill={color} />
      </svg>
      <span className={`text-${color} text-5xl font-bold`}>Ques<span className="text-gray-300">.AI</span></span>
    </div>
  );

  return (
    <div className="flex h-screen">
      {/* Add global styles */}
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      
      {/* Left Side - Marketing Content */}
      <div className="w-5/6 bg-gradient-to-br from-purple-800 to-purple-600 p-12 flex flex-col justify-center relative overflow-hidden">
        <WaveBackground />
        
        <div className="z-10">
          <QuesAILogo className="mb-8" />
          
          <h1 className="text-5xl font-bold mb-2 text-white">Your podcast</h1>
          <h1 className="text-5xl font-bold mb-2 text-white">will no longer</h1>
          <h1 className="text-5xl font-bold mb-6 text-white">be just a hobby.</h1>
          
          <p className="text-xl mb-6 text-white opacity-90">
            Supercharge Your Distribution using our AI assistant!
          </p>
        </div>
      </div>
      
      {/* Right Side - Authentication Form */}
      <div className="w-1/2 bg-white p-12 flex flex-col justify-center items-center">
        <div className="w-full max-w-md">
          <div className="flex flex-col items-center mb-8">
            <QuesAILogo color="purple-700 " />
            <h2 className="text-4xl font-medium text-center mt-4 ">
              Welcome to <span className="text-purple-700  font-bold">Ques.AI</span>
            </h2>
          </div>
          
          {message.text && (
            <div 
              className={`px-4 py-2 mb-6 rounded ${
                message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {message.text}
            </div>
          )}
          
          {!isSignIn && (
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
          )}
          
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>
          
          {!isSignIn && (
            <div className="mb-4">
              <label className="block text-gray-600 text-sm mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>
          )}
          
          <div className="flex justify-between items-center mb-6">
            {isSignIn && (
              <>
                <label className="flex items-center text-gray-600">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <span className="text-sm">Remember me</span>
                </label>
                <a href="#" className="text-purple-700 text-sm hover:underline">
                  Forgot password?
                </a>
              </>
            )}
          </div>
          
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isLoading}
            className="w-full bg-purple-700 hover:bg-purple-800 text-white py-3 rounded-md mb-6 flex justify-center items-center transition duration-300"
          >
            {isLoading ? (
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
            ) : null}
            {isSignIn ? 'Login' : 'Create Account'}
          </button>
          
          <div className="flex items-center justify-center mb-6">
            <hr className="w-full border-gray-200" />
            <span className="px-4 text-gray-500 text-sm">or</span>
            <hr className="w-full border-gray-200" />
          </div>
          
          <button 
            type="button"
            className="w-full border border-gray-300 hover:bg-gray-50 py-2 rounded-md text-gray-700 flex items-center justify-center mb-6 transition duration-300"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
          
          <div className="text-center text-sm text-gray-600">
            <span>{isSignIn ? "Don't have an account? " : "Already have an account? "}</span>
            <button
              type="button"
              onClick={toggleMode}
              className="text-purple-700 font-medium hover:underline"
            >
              {isSignIn ? 'Create Account' : 'Sign In'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}