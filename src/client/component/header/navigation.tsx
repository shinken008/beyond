import * as React from 'react';
import { createHashHistory } from 'history';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
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
      <BottomNavigationAction value="" label="首页" icon={<Icon />} />
      <BottomNavigationAction value="Recent" label="近期" icon={<Icon />} />
      <BottomNavigationAction value="Favorite" label="兴趣" icon={<Icon />} />
      <BottomNavigationAction value="Nearby" label="附近" icon={<Icon />} />
      <BottomNavigationAction value="Todo" label="Todo" icon={<Icon />} />
    </BottomNavigation>
  );
}

export default SimpleBottomNavigation;