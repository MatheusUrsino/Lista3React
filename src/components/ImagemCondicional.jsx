import './css/ImagesUrlStyle.css'

function ImagesUrl(props) {
    return (
      <div>
        {props.urls.map((url, index) =>
          url ? <img key={index} src={url} alt={`Imagem ${index + 1}`} /> : null
        )}
      </div>
    );
  }
  
  export default ImagesUrl;
  