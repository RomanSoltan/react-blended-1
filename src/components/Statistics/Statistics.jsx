import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const icons = [
    FaRegThumbsUp,
    MdPeople,
    MdOutlineProductionQuantityLimits,
    GiTreeDoor,
  ];
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map((stat, idx) => {
          const Icon = icons[idx];
          return (
            <li className={style.item} key={stat.id}>
              <StatisticsItem stat={stat} icon={Icon} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
