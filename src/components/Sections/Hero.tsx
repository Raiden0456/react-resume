// External module imports
import {ChevronDownIcon} from '@heroicons/react/outline';
import classNames from 'classnames';
import {FC, memo, useMemo} from 'react';
import Typewriter from 'typewriter-effect';

// Newline separator
// Internal module imports
import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {videoSrc, name, description, actions} = heroData;

  const typewriterOptions = useMemo(
    () => ({
      strings: ['Hi!', name, 'Full-stack Developer.'],
      autoStart: true,
      loop: true,
    }),
    [name],
  );

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-screen items-center justify-center">
        <video autoPlay className="absolute z-0 h-full w-full object-cover" loop muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <div className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              <Typewriter options={typewriterOptions} />
            </div>
            {description}
            <div className="flex gap-x-4 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-teal-700/40 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary
                      ? 'border-teal-500 ring-teal-500 hover:bg-teal-700/40'
                      : 'border-white ring-white hover:bg-white/40',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
