import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';
import logoMark from '@/assets/Logo/Logo.png';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulate brief loading
    await new Promise((r) => setTimeout(r, 500));

    const success = login(password);
    if (success) {
      navigate('/admin/dashboard?tab=hero');
    } else {
      setError('Invalid password. Access denied.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-brand-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-sm"
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logoMark} alt="The Zamora Room" className="h-24 w-auto opacity-80" />
        </div>

        {/* Login card */}
        <div className="bg-brand-dark border border-white/5 p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lock size={18} className="text-brand-gold" />
            <h1 className="font-display text-2xl tracking-wider text-brand-cream">
              ADMIN ACCESS
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-body text-brand-gray uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full bg-brand-black border border-white/10 text-brand-cream px-4 py-2.5 pr-10 font-body text-sm placeholder:text-brand-gray/50 focus:outline-none focus:border-brand-gold/50 transition-colors duration-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray hover:text-brand-cream transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm font-body"
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-gold text-brand-black py-2.5 font-body font-semibold text-sm tracking-widest uppercase hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-50"
            >
              {loading ? 'Verifying...' : 'Login'}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-brand-gray/40 font-body mt-6">
          The Zamora Room – Coffee Lab Admin Panel
        </p>
      </motion.div>
    </div>
  );
}
