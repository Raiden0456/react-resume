import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={label}
          className="-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500  sm:-m-3 sm:p-3"
          href={href}
          key={label}>
          <Icon className="min-h-5 min-w-5 sm:min-h-6 sm:min-w-6 h-5 w-5 align-baseline" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
