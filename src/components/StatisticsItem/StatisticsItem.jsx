import style from './StatisticsItem.module.css';

const StatisticsItem = ({ stat, icon: Icon }) => {
  return (
    <>
      {/* Тут повинна бути іконка */}
      <Icon size="32" />
      <span className={style.counter}>{stat.total}</span>
      <p className={style.text}>{stat.title}</p>
    </>
  );
};

export default StatisticsItem;
