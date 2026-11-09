
import { ThemeSelector } from '@librechat/client';
import { TStartupConfig } from 'librechat-data-provider';
import { ErrorMessage } from '~/components/Auth/ErrorMessage';
import { hasPublishedPolicies } from '~/utils/policies';
import { TranslationKeys, useLocalize } from '~/hooks';
import SocialLoginRender from './SocialLoginRender';
import { BlinkAnimation } from './BlinkAnimation';
import LegalConsent from './LegalConsent';
import { Banner } from '../Banners';
import Footer from './Footer';
import { cn } from '~/utils';

function AuthLayout({
  children,
  header,
  isFetching,
  startupConfig,
  startupConfigError,
  pathname,
  error,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  isFetching: boolean;
  startupConfig: TStartupConfig | null | undefined;
  startupConfigError: unknown | null | undefined;
  pathname: string;
  error: TranslationKeys | null;
}) {
  const localize = useLocalize();

  const hasStartupConfigError =
    startupConfigError !== null &&
    startupConfigError !== undefined;

  const isRegister = pathname.includes('register');
  const isLogin =
    !pathname.includes('2fa') && pathname.includes('login');

  const showsSocialLogin = isLogin || isRegister;

  const hasPolicies = hasPublishedPolicies(startupConfig);

  const registrationStatesConsent =
    isRegister &&
    hasPolicies &&
    !hasStartupConfigError &&
    !isFetching;

  const statesConsentBelowProviders =
    isLogin && hasPolicies;

  const statesConsent =
    registrationStatesConsent ||
    statesConsentBelowProviders;

  const isTwoFactorSetup =
    pathname === '/login/2fa/setup';

  const DisplayError = () => {
    if (hasStartupConfigError) {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>
            {localize('com_auth_error_login_server')}
          </ErrorMessage>
        </div>
      );
    }

    if (error === 'com_auth_error_invalid_reset_token') {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>
            {localize('com_auth_error_invalid_reset_token')}{' '}
            <a
              className="text-accent-primary font-semibold hover:underline"
              href="/forgot-password"
            >
              {localize('com_auth_click_here')}
            </a>{' '}
            {localize('com_auth_to_try_again')}
          </ErrorMessage>
        </div>
      );
    }

    if (error != null && error) {
      return (
        <div className="mx-auto sm:max-w-sm">
          <ErrorMessage>{localize(error)}</ErrorMessage>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-surface-primary">
      <Banner />

      <div className="flex min-h-screen flex-1 flex-col lg:flex-row">

        {/* CAMPOUS — Brand panel with animated gradient */}
        <aside
          className="relative hidden overflow-hidden lg:flex lg:w-[46%] lg:flex-col lg:justify-between"
          style={{
            background: 'linear-gradient(135deg, #0D3B36 0%, #16524B 30%, #1A5F57 50%, #16524B 70%, #0D3B36 100%)',
            backgroundSize: '200% 200%',
          }}
        >
          {/* Animated decorative orbs */}
          <div
            className="campus-orb-drift pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full opacity-25 blur-3xl"
            style={{ backgroundColor: '#42A9A0' }}
          />
          <div
            className="campus-orb-drift pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full opacity-10 blur-3xl"
            style={{ backgroundColor: '#5FC9BE', animationDelay: '5s' }}
          />

          {/* Logo area */}
          <div className="relative z-10 p-10 xl:p-14">
            <div className="campus-fade-in campus-delay-1 flex items-center gap-3">
              <img
                src="/assets/CAMPOUS.png"
                alt="CAMPOUS"
                className="campus-hover-lift h-11 w-11 object-contain"
              />
              <span
                className="text-2xl font-bold tracking-tight text-white"
                style={{ letterSpacing: '-0.02em' }}
              >
                CAMPOUS
              </span>
            </div>
          </div>

          {/* Hero content — mascot with floating animation */}
          <div className="relative z-10 flex flex-col items-center px-10 pb-10 text-center xl:px-14 xl:pb-14">
            {/* Glow halo behind mascot */}
            <div
              className="campus-glow-pulse pointer-events-none absolute top-8 h-48 w-48 rounded-full blur-2xl xl:h-56 xl:w-56"
              style={{ backgroundColor: '#42A9A0' }}
            />

            {/* Floating mascot */}
            <div className="relative z-10 campus-scale-in campus-delay-2">
              <img
                src="/assets/CAMPOUS.png"
                alt="CAMPOUS"
                className="campus-float campus-hover-lift mb-6 h-40 w-40 object-contain drop-shadow-2xl xl:h-52 xl:w-52"
              />
            </div>

            <h2
              className="campus-fade-up campus-delay-3 max-w-md text-3xl font-semibold leading-tight text-white xl:text-4xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Your intelligent workspace for learning.
            </h2>

            <p
              className="campus-fade-up campus-delay-4 mt-5 max-w-sm text-base leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.65)' }}
            >
              A unified AI platform to explore ideas, deepen understanding,
              and accelerate your work.
            </p>

            {/* Feature pills */}
            <div className="campus-fade-up campus-delay-5 mt-8 flex flex-wrap justify-center gap-2">
              {['AI Assistant', 'Knowledge Hub', 'Smart Tools'].map((item) => (
                <span
                  key={item}
                  className="rounded-lg border px-3.5 py-1.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-white/10"
                  style={{
                    borderColor: 'rgba(95, 201, 190, 0.25)',
                    backgroundColor: 'rgba(95, 201, 190, 0.08)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Footer attribution */}
          <div
            className="campus-fade-in campus-delay-5 relative z-10 px-10 pb-8 text-xs xl:px-14 xl:pb-10"
            style={{ color: 'rgba(255, 255, 255, 0.35)' }}
          >
            &copy; {new Date().getFullYear()} CAMPOUS. All rights reserved.
          </div>
        </aside>

        {/* CAMPOUS — Auth form */}
        <div className="relative flex min-w-0 flex-1 flex-col">
          <div className="flex items-center justify-between px-6 py-5 lg:justify-end lg:px-10">
            {/* Mobile logo */}
            <div className="campus-fade-in flex items-center gap-2 lg:hidden">
              <img
                src="/assets/CAMPOUS.png"
                alt="CAMPOUS"
                className="campus-float-smooth campus-hover-lift h-9 w-9 object-contain"
              />
              <span className="text-text-primary text-lg font-bold tracking-tight">
                CAMPOUS
              </span>
            </div>

            <ThemeSelector />
          </div>

          <main className="flex flex-1 items-center justify-center px-4 py-8 sm:px-8">
            <div
              className={cn(
                'campus-scale-in campus-delay-2 w-full rounded-2xl border border-black/5 bg-surface-primary px-5 py-8 shadow-sm dark:border-white/10 sm:px-9',
                isTwoFactorSetup
                  ? 'max-w-lg'
                  : 'max-w-md',
              )}
            >
              <BlinkAnimation active={isFetching}>
                <div className="mb-6 flex justify-center lg:hidden">
                  <img
                    src="/assets/CAMPOUS.png"
                    alt="CAMPOUS"
                    className="campus-float-smooth campus-hover-lift h-16 w-16 object-contain"
                  />
                </div>
              </BlinkAnimation>

              <DisplayError />

              {!hasStartupConfigError &&
                !isFetching &&
                header && (
                  <h1 className="text-text-primary mb-5 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
                    {header}
                  </h1>
                )}

              {children}

              {showsSocialLogin && (
                <SocialLoginRender
                  startupConfig={startupConfig}
                  showPasskey={isLogin}
                />
              )}

              {statesConsentBelowProviders && (
                <LegalConsent startupConfig={startupConfig} />
              )}
            </div>
          </main>

          {!statesConsent && (
            <Footer startupConfig={startupConfig} />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
