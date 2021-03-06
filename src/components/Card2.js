import React, { Component } from "react";
import "../styles/scss/Card.scss";

export default class Card2 extends Component {
  render() {
    return (
      <div class="blog-slider">
        <div class="blog-slider__wrp swiper-wrapper">
          <div class="blog-slider__item swiper-slide">
            <div class="blog-slider__img">
              <img
                src="https://res.cloudinary.com/muhammederdem/image/upload/v1535759872/kuldar-kalvik-799168-unsplash.jpg"
                alt=""
              />
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">
                <img
                  class="alignnone size-full wp-image-3559"
                  src="http://tsegtslawgroup.com/wp-content/uploads/2017/05/title_scale.png"
                  alt=""
                  width="31"
                  height="25"
                />
              </span>
              <div class="blog-slider__title">{this.props.title}</div>
              <div class="blog-slider__text">
                Click "READ MORE" to view more information about{" "}
                {this.props.title}.
              </div>
              <a
                href="javascript:void(0)"
                class="blog-slider__button"
                id={this.props.id}
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
        <div class="blog-slider__pagination" />
      </div>
    );
  }
}
