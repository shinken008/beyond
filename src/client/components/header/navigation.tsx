import * as React from 'react';
import { createHashHistory } from 'history';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import Home from '../../static/icon/Home';
import Reloadtime from '../../static/icon/Reloadtime';
import Heart from '../../static/icon/Heart';
const history = createHashHistory();

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const [oldValue, setOldValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        if (oldValue === newValue) { return };
        setValue(newValue);
        setOldValue(newValue);
        history.push(`/${newValue}`);
      }}
      showLabels
    >
      <BottomNavigationAction value="" label="首页" icon={<Icon component={Home} />} />
      <BottomNavigationAction value="Recent" label="近期" icon={<Icon component={Reloadtime} />} />
      <BottomNavigationAction value="Favorite" label="兴趣" icon={<Icon component={Heart} />} />
      <BottomNavigationAction value="Todo" label="Todo" icon={<Icon component={Home} />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;
