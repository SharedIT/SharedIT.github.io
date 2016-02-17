---
layout: default
title: Personal Excel Workbook
permalink: /PersonalWorkbook/
tags: hide
---
{::options parse_block_html="true" /}
<div class="content-wrapper">
  <div class="content">
# How to Add a Macro to Personal Workbook
{: #title}
***

# Video How-to
<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Vr-Myz78bLc" frameborder="0" allowfullscreen></iframe>
</div>

***

# Written Instructions

***

## Find Personal Workbook Location

Find your personal Workbook Location if it Exists. Look in the following paths on your computer to see if you already have a PERSONAL>

### Possible Locations

#### Windows 7

```
C:\Users\{USER}\AppData\Roaming\Microsoft\Excel\XLSTART\PERSONAL.XLSB
```
{: .smallCode}

#### Windows XP

```
C:\Documents and Settings\ApplicationData\Microsoft\Excel\XLSTART\PERSONAL.XLSB
```
{: .smallCode}

### Additional Detail and Locations

#### Excel 2010

```
C:\Program Files\Microsoft Office\Office14\XLSTART\
```
{: .smallCode}

#### Excel 2007

```
C:\Program Files\Microsoft Office\Office12\XLSTART\
```
{: .smallCode}

#### Excel 2003

```
C:\Program Files\Microsoft Office\Office11\XLSTART\
```
{: .smallCode}

## Open Personal Workbook and unhide it

Once you find *PERSONAL.XLSB* open the file

## Add Macro to Workbook

```
Sub format_cornSheet_1()
'
'

' shut off screen display
    Application.ScreenUpdating = False



' format all font in column A through end of detail section to bold
    ActiveWorkbook.ActiveSheet.Range("A6").Select
    Range(Selection, Selection.End(xlDown)).Select
    Selection.Font.Bold = True

' format first footer section bold font
    'ActiveWorkbook.ActiveSheet.Range("A6").Select
    'Selection.End(xlDown).Select
    'ActiveCell.Offset(2, 0).Select
    'Selection.Font.Bold = True
    'ActiveCell.Offset(1, 0).Select
    'Selection.Font.Bold = True
    'ActiveCell.Offset(1, 0).Select
    'Range(Selection, Selection.End(xlToRight)).Select
    'Selection.Font.Bold = True


' format second footer section bold font
    'Cells.Find(What:="SEQ.", After:=ActiveCell, LookIn:=xlFormulas, LookAt _
    '    :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _
    '    False, SearchFormat:=False).Activate
    'Range(Selection, Selection.End(xlToRight)).Select
    'Selection.Font.Bold = True
    'ActiveCell.Offset(-1, 0).Select
    'Selection.Font.Bold = True
    'ActiveCell.Offset(-1, 0).Select
    'Selection.Font.Bold = True

' format header borders
   Call format_headers

' format detail header as bold
    Range("A5:S6").Select
    Selection.Font.Bold = True


' call subs to insert averages into columns G and I at row 4
'Call avg_g
'Call avg_i

' set row height to 19 for first 200 rows
ActiveSheet.Rows("1:300").RowHeight = 19


' activate A1 (put frozen rows to top and activate A1 as last step for user)
    Range("A7").Select
    ActiveWindow.FreezePanes = True

    ActiveWorkbook.ActiveSheet.Range("A7").Select
    ActiveWorkbook.ActiveSheet.Range("A1").Select

' format cells to tenth number format
    Call cells_to_one_decimal

' cells_to_date
    Call cells_to_date

' format column width (all columns)
    Call column_w

' format cells_to_timeAMPM
    Call cells_to_timeAMPM

Range("A1").Select

' save to desktop
Dim location As String
Dim a_date As String
location = ActiveWorkbook.ActiveSheet.Range("B1").Value
a_date = Format(ActiveWorkbook.ActiveSheet.Range("H2").Value, "mm_dd_yyyy")
ActiveWorkbook.SaveAs Environ("UserProfile") & "\Desktop\inspection_" & location & "_" & a_date & ".xlsx", FileFormat:=51

' turn on screen display
    Application.ScreenUpdating = True

End Sub

Sub avg_g()

' insert average formula into column G based on finding DKT
    Dim f1 As String
    Dim s1 As String


    ActiveWorkbook.ActiveSheet.Range("G6").Select
    Cells.Find(What:="DKT.", After:=ActiveCell, LookIn:=xlFormulas, LookAt _
        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _
        False, SearchFormat:=False).Activate
        ActiveCell.Offset(-4, 0).Activate
            f1 = ActiveCell.Address
        Range("G7").Activate
            s1 = ActiveCell.Address
        Range("G4").Activate
    ActiveCell.Formula = "=AVERAGE(" & s1 & ":" & f1 & ")"
End Sub

Sub avg_i()

' insert average formula into column I based on finding F.M.
    Dim s2 As String
    Dim f2 As String

    ActiveWorkbook.ActiveSheet.Range("I6").Select
    Cells.Find(What:="F.M.", After:=ActiveCell, LookIn:=xlFormulas, LookAt _
        :=xlPart, SearchOrder:=xlByRows, SearchDirection:=xlNext, MatchCase:= _
        False, SearchFormat:=False).Activate
        ActiveCell.Offset(-4, 0).Activate
            f2 = ActiveCell.Address
        Range("I7").Activate
            s2 = ActiveCell.Address
        Range("I4").Activate
    ActiveCell.Formula = "=AVERAGE(" & s2 & ":" & f2 & ")"

End Sub

Sub format_headers()

' format fonts
    Range("A1:A3,D1:D3,G1:G3,J1:J3").Select
    With Selection.Font
        .Name = "Arial"
        .FontStyle = "Bold"
        .Strikethrough = False
        .Superscript = False
        .Subscript = False
        .OutlineFont = False
        .Shadow = False
        .Underline = xlUnderlineStyleNone
        .ColorIndex = xlAutomatic
        .TintAndShade = 0
        .ThemeFont = xlThemeFontNone
    End With

' format borders
    Range("B1:B3,E1:E3,H1:H3,K1:K3").Select
    Selection.Borders(xlDiagonalDown).LineStyle = xlNone
    Selection.Borders(xlDiagonalUp).LineStyle = xlNone
    With Selection.Borders(xlEdgeLeft)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlEdgeTop)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlEdgeBottom)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    With Selection.Borders(xlEdgeRight)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With
    Selection.Borders(xlInsideVertical).LineStyle = xlNone
    With Selection.Borders(xlInsideHorizontal)
        .LineStyle = xlContinuous
        .ColorIndex = 0
        .TintAndShade = 0
        .Weight = xlThin
    End With

End Sub

Sub column_w()

ActiveWorkbook.ActiveSheet.Columns("B:S").AutoFit

' format column width (all columns)
    'ActiveWorkbook.ActiveSheet.Columns("A:A").ColumnWidth = 8.14
    'ActiveWorkbook.ActiveSheet.Columns("B:B").ColumnWidth = 17.14
    'ActiveWorkbook.ActiveSheet.Columns("C:C").ColumnWidth = 12.57
    'ActiveWorkbook.ActiveSheet.Columns("D:I").ColumnWidth = 9.14
    'ActiveWorkbook.ActiveSheet.Columns("J:J").ColumnWidth = 8.57
    'ActiveWorkbook.ActiveSheet.Columns("K:M").ColumnWidth = 9.14

End Sub

'example code for autofit columns
'Sub columns_auto_fit()
'ActiveWorkbook.ActiveSheet.Columns("A:K").AutoFit
'End Sub

'example average except
'=AVERAGE(IF(A10:A14>SMALL(A10:A14,2),A10:A14))

'Sub_average_excluding_formulas
'Dim ws As Worksheet
'Dim rng As Range
'Set ws = ActiveSheet
'For Each rng In ws.Cells.SpecialCells(xlCellTypeFormulas)
'now what do we do with these identified averages?

Sub cells_to_one_decimal()
' format cells to 0.1 number format
    ActiveWorkbook.ActiveSheet.Columns("E:N").Select
    Selection.NumberFormat = "0.0"
End Sub

Sub cells_to_date()
' format cells to 0.1 number format
    ActiveWorkbook.ActiveSheet.Range("H1:H2").Select
    Selection.NumberFormat = "mm/dd/yyyy"
End Sub

Sub cells_to_timeAMPM()
' format cells to 0.1 number format
    ActiveWorkbook.ActiveSheet.Range("B2:B3").Select
    Selection.NumberFormat = "h:mm AM/PM"
End Sub

```
{: .largeCode}

## Hide Workbook

## Create Button For New Macro


  </div>
</div>
