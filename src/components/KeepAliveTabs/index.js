/*
 * @Descripttion:
 * @version:
 * @Author: hunt
 * @Date: 2021-03-25 18:17:56
 * @LastEditors: hunt
 * @LastEditTime: 2021-03-25 21:44:46
 */
import { useAliveController } from 'react-activation';

import Tab from './Tab';
import styles from './index.less';

export default function KeepAliveTabs() {
  const { getCachingNodes } = useAliveController();
  const cachingNodes = getCachingNodes();

  // console.log(cachingNodes)

  return (
    <ul className={styles['alive-tabs']}>
      {cachingNodes.map((node) => (
        <Tab key={node.name} node={node} />
      ))}
    </ul>
  );
}
