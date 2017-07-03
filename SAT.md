# SAT Solver

## Rules
- [openSUSE:Libzypp satsolver internals](https://en.opensuse.org/openSUSE:Libzypp_satsolver_internals#Rules)
- [MiniSAT User Guide: How to use the MiniSAT SAT Solver](https://www.dwheeler.com/essays/minisat-user-guide.html)
- [SAT solving, SMT solving and Program Verification](http://www.win.tue.nl/mdseminar/pres/zantema-17-02-11.pdf)
- [Decision Procedures for Propositional Logic](https://cse.unl.edu/~tnguyen/class/csce990/ch2.pdf)
- [How to Convert a Formula to CNF](https://www.cs.jhu.edu/~jason/tutorials/convert-to-CNF.html)

## CNF (Dimacs Format)
- [CNF – Conjunctive Normal Form (Dimacs format) Explained](https://fairmut3x.wordpress.com/2011/07/29/cnf-conjunctive-normal-form-dimacs-format-explained/)

### If-Then-Else (ITE)
    (if x then y else z) ≡ (x ∧ y) ∨ (¬x ∧ z)

### Modern SAT Solver
- DPLL (Davis–Putnam–Loveland–Logemann)
  * better@2007
- stochastic search

## 補充資料
- [不確定多項式時間之完成問題 (NPC Problem)](https://cg2010studio.com/2011/05/27/npc-problem/)
