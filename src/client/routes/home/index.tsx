import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import injectSheet from 'react-jss'

const firstTop = 10

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  left: {
    flex: 'auto',
    minWidth: '10rem',
  },
  middle: {
    flex: 'auto',
    minWidth: '20rem',
  },
  right: {
    flex: 'auto',
    minWidth: '10rem',
  },
  rightList: {
    padding: 20,
    marginRight: 10,
    marginTop: 10,
    fontSize: 12,
    background: 'rgba(255, 255, 255, 0.6)',
    '&>li': {
      marginBottom: 10,
      '&:last-child': {
        marginBottom: 0,
      }
    },
  },
  card: {
    minWidth: 275,
    float: 'left',
    margin: 20,
    // position: 'absolute',
    // top: firstTop,
    // transition: 'top 0.2s',
  },
};

const arr = [
  {
    title: '111',
    url: 'https://drscdn.500px.org/photo/303676733/q%3D80_m%3D1000/v2?user_id=26059455&webp=true&sig=9d8b805496460d56309f85238ffed258aee05bf5026e9c4f160467f3c853e5be',
  }, {
    title: '222',
    url: 'https://drscdn.500px.org/photo/303676733/q%3D80_m%3D1000/v2?user_id=26059455&webp=true&sig=9d8b805496460d56309f85238ffed258aee05bf5026e9c4f160467f3c853e5be',
  },
]

class Home extends React.Component<{ classes: any }> {
  scrollListener = null

  componentDidMount() {
    const { classes } = this.props;
    const cardClass = classes.card;
    const middle = classes.middle;
    // const cards = document.querySelectorAll(`.${middle} .${cardClass}`)
    // this.scrollListener = document.addEventListener('scroll', () => {
    //   const height = firstTop + (window.pageYOffset || document.documentElement.scrollTop)
    //   console.log(height)
    //   cards.forEach((card, index) => {
    //     console.dir(card);
    //     (card as any).style.top = height * 1.3 / (index + 1) + index * 300 + 'px';
    //   });
    // })
  }

  componentWillUnmount() {
    // document.removeEventListener('scroll', this.scrollListener)
  }

  render() {
    const { classes } = this.props;
    console.log(this.props)
    return (
      <div className={classes.container}>
        <div className={classes.left}>
        </div>
        <div className={classes.middle}>
        {
          arr.map((content, index) => (
            <Card key={index} className={classes.card}>
              {/* <CardHeader title={content.title} /> */}
              <CardContent><img src={content.url} width="275" /></CardContent>
            </Card>)
          )
        }
        </div>
        <div className={classes.right}>
          <ul className={classes.rightList}>
          {
            Array(Math.ceil((Math.random() * 10))).fill(8).map((item, index) =>
              <li key={index}>更新内容{new Date().toLocaleDateString()}</li>)
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(Home);
