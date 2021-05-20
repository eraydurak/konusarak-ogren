import { useState, useEffect } from 'react'


const YorumEkle = () => {
  const [comment, setComment] = useState({});

  const [totalComments, setTotalComments] = useState([])

  const submit = (e) => {
    e.preventDefault();
    setTotalComments([...totalComments, comment])
  }

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  }

  const deleteHandler = (e) => {
    e.preventDefault();
    const dlt = [...totalComments];
    dlt.splice(e, 1);
    setTotalComments(dlt)

  }


  useEffect(() => {

  }, [totalComments])


  return (
    <>
      <h1 className="big-header">YORUMLAR</h1>
      <div className="comment" id="comment">
        <label>
          <input onChange={onChangeHandler} type="textarea" placeholder="Yorumunuzu giriniz" />
          <button onClick={submit}><i class="fas fa-plus"></i></button>
        </label>
        <div className="comment-section">
          {totalComments && totalComments.map(cm => (
            <div className="eachComment">
              <h3>Değerli Yorum</h3>
              <div className="cmnt">
                <p>{cm}</p>
                <button className="delete-btn" onClick={deleteHandler}>sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default YorumEkle;