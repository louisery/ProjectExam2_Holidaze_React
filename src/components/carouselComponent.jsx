import React from "react";
import $ from "jquery";

export default class CarouselComponent extends React.Component {
  //   componentDidMount() {
  //     this.initAlbery();
  //   }

  //   initAlbery() {
  //     $(".albery-container").albery();
  //   }

  render() {
    return (
      <div className="[ row ]">
        <div className="[ col-lg-12 col-md-12 col-sm-12 col-xs-12 ]">
          <div className="albery-container">
            <div className="albery-wrapper">
              <div className="albery-item">
                <img src="https://picsum.photos/1000/666?image=655" alt="" />
              </div>
              <div className="albery-item">
                <img src="https://picsum.photos/1000/666?image=656" alt="" />
              </div>
              <div className="albery-item">
                <img src="https://picsum.photos/1000/666?image=657" alt="" />
              </div>
              <div className="albery-item">
                <img src="https://picsum.photos/1000/666?image=658" alt="" />
              </div>
              <div className="albery-item">
                <img src="https://picsum.photos/1000/666?image=659" alt="" />
              </div>
            </div>

            <div className="move-right">
              <a href="#" id="rightArrow">
                ▶
              </a>
            </div>
            <div className="move-left">
              <a href="#" id="leftArrow">
                ◀
              </a>
            </div>
          </div>

          <div class="pagination-container">
            <div class="pagination-wrapper">
              <div class="pagination-item" data-item="1">
                <img src="https://picsum.photos/116/77?image=655" alt="" />
              </div>
              <div class="pagination-item" data-item="2">
                <img src="https://picsum.photos/116/77?image=656" alt="" />
              </div>
              <div class="pagination-item" data-item="3">
                <img src="https://picsum.photos/116/77?image=657" alt="" />
              </div>
              <div class="pagination-item" data-item="4">
                <img src="https://picsum.photos/116/77?image=658" alt="" />
              </div>
              <div class="pagination-item" data-item="5">
                <img src="https://picsum.photos/116/77?image=659" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
