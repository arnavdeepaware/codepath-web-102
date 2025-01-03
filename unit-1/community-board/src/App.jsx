import './App.css';
import Header from './components/Header';
import Card from './components/Card';
const App = () => {

  return (
    <div className='app-container'>
      <Header />
      <div className='main-container'>
        <Card 
          title='Birria-Landia' 
          description='Mexican'
          imageSrc="https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg"
          weblink="https://birrialandia.com"
        />

        <Card 
          title='Mysttik Masala' 
          description='Indian'
          imageSrc="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"
          weblink="https://indianfoodny.com"
        />

        <Card 
          title='Halal Guys' 
          description='Middle Eastern'
          imageSrc="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg"
          weblink="https://thehalalguys.com/menu/"
        />

        <Card 
          title='NY Dosas' 
          description='Vegetarian'
          imageSrc="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"
          weblink="https://nydosas.com/menu/"
        />

        <Card 
          title='Jerk Pan' 
          description='Jamaican'
          imageSrc="https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg"
          weblink="https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/" 
        />

        <Card 
          title='Halal Guys' 
          description='Middle Eastern'
          imageSrc="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg" 
        />

        <Card 
          title='Halal Guys' 
          description='Middle Eastern'
          imageSrc="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg" 
        />

        <Card 
          title='Halal Guys' 
          description='Middle Eastern'
          imageSrc="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg" 
        />

        <Card 
          title='Halal Guys' 
          description='Middle Eastern'
          imageSrc="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg" 
        />

        <Card 
          title='Halal Guys' 
          description='Middle Eastern'
          imageSrc="https://www.vmcdn.ca/f/files/via/images/food/halal-guys-chicken-platter.jpg" 
        />
         
      </div>
    </div>

  )
}

export default App