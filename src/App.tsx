import mePhoto from './photo/me.jpg'
import dogPhoto from './photo/dog.jpg'

function App() {
  return (
    <div id="app">
      <div id="left-column">
        <img src={mePhoto} alt="head" />
      </div>
      <div id="right-column">
        <div id="intro">
          <h1>鄭丞希 Cheng Xi, Cheng</h1>
          <h2>Nov 06, 2003 (20歲)</h2>
          <h3>關於我</h3>
          <ul>
            <li>ESFJ(雖然是E但其實很I)</li>
            <li>天蠍座(我超愛記仇)</li>
            <li>是個話多說話有一點直的人類</li>
            <li>喜歡畫畫、睡覺、偶爾打打遊戲</li>
          </ul>
          <h3>學歷</h3>
          <ul>
            <li>淡江大學資訊管理學系三年級(現)</li>
            <li>私立中道高級中學</li>
          </ul>
        </div> 
        <div id="puppy">
          <div id="left">
            <img src={dogPhoto} alt="dog" />
          </div>
          <div id="right">
            <h1>狗勾 Doggy</h1>
            <h2>Dec 05, 2013 (10歲)</h2>
            <h2>出生地: 娃娃機</h2>
          </div>
        </div>
        <form>
          <div id="input-container">
            <input type="text" placeholder="輸入想對我說的話"/>
            <input type="submit" value="提交" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
