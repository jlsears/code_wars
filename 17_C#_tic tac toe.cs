using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;

public class Kata
{
  public static string TicTacToeWinner(string board)
  {   
    ArrayList theX = new ArrayList();
    ArrayList theO = new ArrayList();
    bool moreX = false;
    bool moreO = false;
    char[,] theSpots = new char[11,2] { {'1', 'a'}, {'1', 'b'}, {'1', 'c'}, {'p', 'p'}, {'2', 'a'}, {'2', 'b'}, {'2', 'c'}, {'p', 'p'}, {'3', 'a'}, {'3', 'b'}, {'3', 'c'}};

    // ASSIGNING BOARD LOCATION COORDINATES TO APPROPRIATE ARRAYLIST
    for(int t = 0; t < board.Length; t++) {
      if(board[t] == 'x') { theX.Add(theSpots[t,0]); theX.Add(theSpots[t,1]); }
      if(board[t] == 'o') { theO.Add(theSpots[t,0]); theO.Add(theSpots[t,1]); }    
    }
    
    // CREATING NEW CHAR ARRAYS THE SIZE OF THEIR CORRESPONDING ARRAYLISTS
    char[] xArray = new char[theX.Count];
    char[] oArray = new char[theO.Count];
    
    //TRANSFERRING COORDINATES TO CORRESPONDING CHAR ARRAY
    for(int i = 0; i < theX.Count; i++) {
      xArray[i] = Convert.ToChar(theX[i]);
    }

    for(int j = 0; j < theO.Count; j++) {
      oArray[j] = Convert.ToChar(theO[j]);
    }
    
    // LOOKING FOR DIAGONAL 
    string xDiag = string.Join("", xArray);
    bool containX = xDiag.Contains("1a2b3c") || xDiag.Contains("1c2b3a");
    if(containX == true) { moreX = true; }
    
    string oDiag = string.Join("", oArray);
    bool containO = oDiag.Contains("1a2b3c") || oDiag.Contains("1c2b3a");
    if(containO == true) { moreO = true; }
        
    // SORTING CHARS IN ARRAY
    Array.Sort(xArray);
    Array.Sort(oArray);

    // DETERMINING WHETHER CONSECUTIVE HORIZONTAL OR VERTICAL MATCHES ARE PRESENT    
    for(int k = 0; k < xArray.Length-2; k++) {
      if(xArray[k] == xArray[k+1] && xArray[k+1] == xArray[k+2]) { 
      moreX = true; 
        }
    }
    
    for(int l = 0; l < oArray.Length-2; l++) {
      if(oArray[l] == oArray[l+1] && oArray[l+1] == oArray[l+2]) { 
      moreO = true;
        }
    }
    
    // RELAYING FINAL RESULT
    if(moreX && moreO) { return "Game is a tie"; }
    if(moreX) { return "Player X is the winner"; }
    if(moreO) { return "Player O is the winner"; }
    else { return "Game is a tie"; }    
  }
}