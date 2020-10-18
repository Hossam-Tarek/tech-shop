function initImageUpload(box) {

    let uploadField = box.querySelector('.image-upload');
    uploadField.addEventListener('change', getFile);
    function getFile(e){
      let file = e.currentTarget.files[0];

      checkType(file);
    }
    
    function previewImage(file){
      let thumb = box.querySelector('.js--image-preview'),
          reader = new FileReader();
      
      reader.onload = function() {
        thumb.style.backgroundImage = 'url(' + reader.result + ')';
      }
      reader.readAsDataURL(file);
      thumb.className += ' js--no-default';
    }
  
    function checkType(file){
      let imageType = /image.*/;
      if (!file.type.match(imageType)) {
        throw 'File is not an image';
      } else if (!file){
        throw 'No picture selected';
      } else {
        previewImage(file);
      }
    }
    
  }
  
  // initialize box-scope
  
  var box = document.querySelectorAll('.preview-container');
  // To start script when select category To edit
  (function waitUntillSelectCaategoty() {
    box = document.querySelector('.preview-container');
    if (box) {
        initDropEffect(box);
        initImageUpload(box);
      } else {
      setTimeout(waitUntillSelectCaategoty, 15);
    }
  }());
  

  /// drop-effect
  function initDropEffect(box){
    let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;
    
    // get clickable area for drop effect
    area = box.querySelector('.js--image-preview');
    area.addEventListener('click', fireRipple);
    
    function fireRipple(e){
      area = e.currentTarget
      // create drop
      if(!drop){
        drop = document.createElement('span');
        drop.className = 'drop';
        this.appendChild(drop);
      }
      // reset animate class
      drop.className = 'drop';
      
      // calculate dimensions of area (longest side)
      areaWidth = getComputedStyle(this, null).getPropertyValue("width");
      areaHeight = getComputedStyle(this, null).getPropertyValue("height");
      maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));
  
      // set drop dimensions to fill area
      drop.style.width = maxDistance + 'px';
      drop.style.height = maxDistance + 'px';
      
      // calculate dimensions of drop
      dropWidth = getComputedStyle(this, null).getPropertyValue("width");
      dropHeight = getComputedStyle(this, null).getPropertyValue("height");
      
      // calculate relative coordinates of click
      // logic: click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center
      x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10)/2);
      y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10)/2) - 30;
      
      // position drop and animate
      drop.style.top = y + 'px';
      drop.style.left = x + 'px';
      drop.className += ' animate';
      e.stopPropagation();
      
    }
  }
  