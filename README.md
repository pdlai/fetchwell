# Fetchwell
Fetchwell is a full-stack, React/Redux app intended to be a clone of the online shopping site [Madewell](https://www.madewell.com/).

**Live Link:** [Fetchwell](https://fetchwell.herokuapp.com/#/)
<br>
<br>
<p align="center">
  <img src="https://github.com/pdlai/fetchwell/blob/main/fetchwell_demo_large.gif" alt="fetchwell-gif"></a></img>
</p>

## Features
### Products Filtering and Persisting State on Refresh
![Filter Refresh]()

Users may browse products that are filtered by category. The navigation bar shows different categories that will filter and redirect the url path. Upon refresh, the url path is used to update the filters, so that the same category of products may be fetched again.
```javascript
componentDidMount(){
    this.path = this.props.location.pathname;
    let queries = this.path.split("/");
    if( queries[1] === 'womens'){
        this.props.updateFilters({
            category: queries[2],
            subcategory: queries[3],
        })
    }
}
 ```
### User Auth and Error Handling
![Reviews Auth]()

There are validations in place before users can perform certain actions such as writing or submitting a review.

Some components will not render and redirect if the user is not logged in.
```javascript
const Protected = ({ loggedIn, path, component: Component, exact }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);
```

Class names are conditionally set if there are errors on submitting a review form.
```html
<div className='review-form-subsection review-form-text'>
  <label id='review-form-summary' className={errors['Summary'] ? 'review-form-error-title' : ''}>Review Summary<div className='review-form-required'>*</div></label>
  <input id='review-form-summary' type="text" value={this.state.summary} onChange={this.update('summary')} className={errors['Summary'] ? 'review-form-error-box' : ''} />
  <div className="review-form-guidance">
    Example: Has great features
  </div>
</div>
```

## Technologies
* Ruby on Rails
* React / Redux
* JavaScript / jQuery / JBuilder
* PostgreSQL
* HTML, CSS
* AWS S3
* Heroku

## Future Plans
* Allow users to edit and delete review they have made
* Implement a simple search bar functionality

