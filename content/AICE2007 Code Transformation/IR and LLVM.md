#software/compilers/code-generation 

### Phi
Phi instructions in LLVM IR seem a little mystical. They produce some value to place into an SSA value, and take two 'structs', where the first element is a previously defined SSA value and the second is a labelled block. What the phi instruction does is reasonably simple - if the block that left to enter into the block containing the `phi` instruction is the one from the first struct, then it evaluates to the first SSA value, otherwise if we came from the other labelled block, use the second SSA value.

```c
void main1(bool r, bool y) {
    bool l = y || r;
}
```

The above is a simple C program that just perform logical or. When compiled by clang with no optimisations, it produces the following IR, containing a `phi`. The IR has been cleaned-up for conciseness.

```llvm
define void @_Z1mbb(i1 zeroext %r, i1 zeroext %y) nounwind {
entry:
  br i1 %r, label %lor.end, label %lor.rhs
  ;branch to lor.rhs if %r == true, or to lor.end if %r == false

lor.rhs:
  br label %lor.end
  ;redirect to lor.end unconditionally

lor.end:
  %1 = phi i1 [ true, %entry ], [ %y, %lor.rhs ]
  ; if we came from %entry, then %r == true, so set %1 to true
  ; otherwise, if we came from %lor.rhs, then %r == false, so set %1 to %y
  
  ret void
}
```