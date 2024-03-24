import {FC, memo, PropsWithChildren, useEffect, useMemo, useRef} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <div className="flex flex-col">
      <span className="text-center text-lg font-bold">{name}</span>
      <div className="flex flex-col gap-y-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);
  const barRef = useRef(null);

  useEffect(() => {
    const currentBar = barRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(`animate-progress-bar-slide-in-${percentage}`);
          observer.unobserve(entry.target); // Unobserve the element after adding the animation class
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (currentBar) {
      observer.observe(currentBar);
    }

    // Create a new style element
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes progress-bar-slide-in-${percentage} {
        0% { width: 0; }
        100% { width: ${percentage}%; }
      }
      .animate-progress-bar-slide-in-${percentage} {
        animation: progress-bar-slide-in-${percentage} 2s forwards;
      }
    `;
    // Append the style element to the document head
    document.head.appendChild(style);

    return () => {
      if (currentBar) {
        observer.unobserve(currentBar);
      }
      // Remove the style element when the component unmounts
      document.head.removeChild(style);
    };
  }, [percentage]);

  return (
    <div className="flex flex-col">
      <span className="ml-2 text-sm font-medium">{name}</span>
      <div className="h-5 w-full overflow-hidden rounded-full bg-neutral-300">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-teal-400" ref={barRef} style={{width: `${percentage}%`}} />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';