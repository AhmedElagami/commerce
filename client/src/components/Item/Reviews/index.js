import React from 'react';
import ReactStars from 'react-rating-stars-component';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './reviews.css';

const options = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' }
];

const Reviews = () => {
  return (
    <div className="mt-md-4 product-reviews">
      <div className="flex-row row" style={{ margin: '10px 0' }}>
        <div className="mb-3 px-3 px-md-2 col-12 col-md-5 col-lg-5">
          <div className="bg-white p-4 box-shadow-primary review-summary">
            <h2 className="mb-0">Rating</h2>
            <div className="d-flex flex-wrap align-items-center mt-2">
              <div style={{ display: 'flex' }}>
                <ReactStars
                  count={5}
                  value={5}
                  edit={false}
                  size={17}
                  isHalf={true}
                  emptyIcon={<i className="fa fa-star-o" />}
                  halfIcon={<i className="fa fa-star-half-o" />}
                  filledIcon={<i className="fa fa-star" />}
                  activeColor="#ffb302"
                />
              </div>
              <span>based on 2 reviews.</span>
            </div>
            <hr style={{ border: '3px solid #f1f1f1' }} />
            {['5', '4', '3', '2', '1'].map(star => (
              <div className="d-flex align-items-center mb-2" key={star}>
                <div className="left">
                  <span>{star} star</span>
                </div>
                <div className="middle">
                  <div className="bar-container">
                    <div className={`bar-${star}`} style={{ width: star === '5' || star === '4' ? '50%' : '0%' }}></div>
                  </div>
                </div>
                <div className="ml-2 right">
                  <span className="fw-medium">{star === '5' || star === '4' ? '50%' : '0%'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-3 px-3 px-md-2 col-12 col-md-7 col-lg-7">
          <div className="review-list">
            {[
              { initial: 'p', color: '#33991a', title: 'nice', rating: 4, date: 'Monday, Apr 24, 2023', comment: 'realy good' },
              { initial: 'A', color: '#e64d66', title: 'Really nice product!', rating: 5, date: 'Wednesday, Aug 4, 2021', comment: "I'm glad I've bought it!" }
            ].map((review, index) => (
              <div className="d-flex align-items-center mb-3 review-box" key={index}>
                <div className="mx-3">
                  <div className="d-flex flex-column justify-content-center align-items-center fw-normal text-white avatar" style={{ backgroundColor: review.color }}>
                    {review.initial}
                  </div>
                </div>
                <div className="p-3 p-lg-4 w-100">
                  <div className="d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 mr-2 one-line-ellipsis">{review.title}</h4>
                    <ReactStars
                      count={5}
                      value={review.rating}
                      edit={false}
                      size={16}
                      isHalf={true}
                      emptyIcon={<i className="fa fa-star-o" />}
                      halfIcon={<i className="fa fa-star-half-o" />}
                      filledIcon={<i className="fa fa-star" />}
                      activeColor="#ffb302"
                    />
                  </div>
                  <p className="mb-2 fs-12">{review.date}</p>
                  <p className="mb-0 three-line-ellipsis word-break-all">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-4 box-shadow-primary add-review">
            <form noValidate>
              <h3 className="mb-3">Add Review</h3>
              <div className="row">
                <div className="col-12 col-md-12">
                  <div className="input-box">
                    <label>Title</label>
                    <div className="input-text-block">
                      <input className="input-text" autoComplete="on" type="text" name="title" placeholder="Enter Review title" />
                    </div>
                    <span className="invalid-message"></span>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="input-box">
                    <label>Comment</label>
                    <textarea type="textarea" rows="4" name="review" placeholder="Write Review" className="textarea-text"></textarea>
                    <span className="invalid-message"></span>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="input-box">
                    <label>Rating</label>
                    <ReactStars
                      count={5}
                      size={30}
                      isHalf={true}
                      emptyIcon={<i className="fa fa-star-o" />}
                      halfIcon={<i className="fa fa-star-half-o" />}
                      filledIcon={<i className="fa fa-star" />}
                      activeColor="#adb5bd"
                    />
                    <span className="invalid-message"></span>
                  </div>
                </div>
                <div className="col-12 col-md-12">
                  <div className="select-box">
                    <label>Will you recommend this product?</label>
                    <Select
                      options={options}
                      defaultValue={options[0]}
                      classNamePrefix="react-select"
                    />
                    <span className="invalid-message"></span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="input-btn custom-btn-secondary md text-only icon-left" type="submit" style={{ borderRadius: '3px' }}>
                  <span className="btn-text">Publish Review</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
