function AltImg(props) {
  return (
    <div>
      {props.urls.map((url, index) =>
        url ? (
          <img
            key={index}
            src={url}
            alt={props.altTexts[index] || `Imagem ${index + 1}`}
          />
        ) : null
      )}
    </div>
  );
}

export default AltImg;
