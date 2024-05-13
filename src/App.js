import { Component } from "react"; //react라이브러리에서 Component클래스를 가져와 사용하겠다 선언!
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

class App extends Component {
  render() {
    return(
      <main className="main-container">
          <h1>예산 계산기</h1>

          <div style={{with:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/* Expense Form */}
            <ExpenseForm />
          </div>

          <div style={{with:'100%', backgroundColor:'white', padding:'1rem'}}>
            {/* Expense List */}
            <ExpenseList />
          </div>

          <div style={{ display:'flex', justifyContent:'end', marginTop:'1rem'}}>
            <p style={{ fontSize:'2rem'}}>
              총지출:
              <span>원</span>
            </p>

          </div>


      </main>
    )
  }

}

export default App; // default는 메인화면으로  사용할 템플릿 컴포넌트로 내보낼때 사용