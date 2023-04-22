(deftemplate utazas
	(slot szallaslehetosegekszama (allowed-symbols nil alacsony kozepes magas))
	(slot megkozelites (allowed-symbols nil konnyu nehez))
	(slot autohasznalat (allowed-symbols nil konnyu nehez))
	(slot buszjaratok (allowed-symbols nil atalgnaljobb atlagos))
	(slot hajojarat (allowed-symbols nil van nincs))
	(slot vonathasznalat (allowed-symbols nil atalgnaljobb atlagos))
	(slot programokszama (allowed-symbols nil alacsony kozepes magas))
	(slot nevezettesegekszama (allowed-symbols nil alacsony kozepes magas))
	(slot kirandulasilehetosegekszama (allowed-symbols nil alacsony kozepes magas))
	(slot helysegarak (allowed-symbols nil alacsony kozepes magas))
)

(deffacts m (utazas))

(defrule first ""
	(declare (salience 10))
	(utazas 
		(szallaslehetosegekszama alacsony)
		(programokszama alacsony)
	)
=>
	(printout t "A megadott kriteriumoknak Nagykanizsa uticel felel meg" crlf)
	(halt))

(defrule second ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama alacsony)
		(programokszama kozepes)
		(helysegarak kozepes)
)
=>
	(printout t "A megadott kriteriumoknak Veszprem uticel felel meg" crlf)
	(halt))


(defrule third ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama alacsony)
		(programokszama kozepes)
		(helysegarak magas)
)
=>
	(printout t "A megadott kriteriumoknak Györ uticel felel meg" crlf)
	(halt))

(defrule fourth ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama kozepes)
		(programokszama alacsony)
)
=>
	(printout t "A megadott kriteriumoknak Zalaegerszeg uticel felel meg" crlf)
	(halt))

(defrule fifth ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama kozepes)
		(programokszama alacsony)
		(kirandulasilehetosegekszama kozepes)
)
=>
	(printout t "A megadott kriteriumoknak Szekesfehervar uticel felel meg" crlf)
	(halt))

(defrule sixth ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama kozepes)
		(programokszama alacsony)
		(kirandulasilehetosegekszama magas)
)
=>
	(printout t "A megadott kriteriumoknak Pecs uticel felel meg" crlf)
	(halt))

(defrule seventh ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama magas)
		(nevezettesegekszama magas)
)
=>
	(printout t "A megadott kriteriumoknak Budapest uticel felel meg" crlf)
	(halt))

(defrule eighth ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama magas)
		(nevezettesegekszama kozepes)
		(helysegarak alacsony)

)
=>
	(printout t "A megadott kriteriumoknak Keszthely uticel felel meg" crlf)
	(halt))

(defrule ninth ""
	(declare (salience 10))
	(utazas 		
		(szallaslehetosegekszama magas)
		(nevezettesegekszama kozepes)
		(helysegarak magas)

)
=>
	(printout t "A megadott kriteriumoknak Balatonfüred uticel felel meg" crlf)
	(halt))


(defrule induction1 ""
	(declare (salience 5))
	?m <- (utazas (szallaslehetosegekszama alacsony)		
		(programokszama nil)
		(megkozelites nil)
		(autohasznalat nil)
		(buszjaratok nil)
		(hajojarat nil)
		(vonathasznalat nil)
		(nevezettesegekszama nil)
		(kirandulasilehetosegekszama nil)
		(helysegarak nil))
=>
	(modify ?m 	(helysegarak alacsony)
		(megkozelites konnyu)
		(autohasznalat konnyu)
		(buszjaratok atlagos)
		(hajojarat nincs)
		(vonathasznalat atalgnaljobb)
		(nevezettesegekszama alacsony)
		(kirandulasilehetosegekszama alacsony)
		(helysegarak alacsony)
)

(defrule induction2 ""
	(declare (salience 5))
	?m <- (utazas (szallaslehetosegekszama magas)
		(megkozelites nil)
		(autohasznalat nil)
		(buszjaratok nil)
		(hajojarat nil)
		(vonathasznalat nil)
		(nevezettesegekszama nil)
		(kirandulasilehetosegekszama nil)
		(helysegarak nil))
=>
	(modify ?m (helysegarak magas)
		(megkozelites nehez)
		(autohasznalat nehez)
		(buszjaratok atalgnaljobb)
		(hajojarat van)
		(vonathasznalat atalgnaljobb)
		(nevezettesegekszama magas)
		(kirandulasilehetosegekszama magas)
		(helysegarak magas))
)

(defrule induction3 ""
	(declare (salience 5))
	?m <- (utazas (szallaslehetosegekszama kozepes)
		(helysegarak nil)
		(programokszama nil)
		(kirandulasilehetosegekszama nil)
		(nevezettesegekszama nil))
=>
	(modify ?m (helysegarak mindegy)
		(programokszama nil)
		(kirandulasilehetosegekszama nil)
		(nevezettesegekszama nil))
)

(defrule question-1 ""
        ?m <- (utazas (szallaslehetosegekszama nil))
=>
	(printout t "Milyen legyen az szallaslehetosegekszama? " crlf)
	(printout t "   alacsony/kozepes/magas " crlf)
	(modify ?m (szallaslehetosegekszama (read))))

(defrule question-2 ""
        ?m <- (utazas (megkozelites nil))
=>
	(printout t "Milyen legyen a megkozelites? " crlf)
	(printout t "   konnyu/nehez " crlf)
	(modify ?m (megkozelites (read))))

(defrule question-3 ""
        ?m <- (utazas (autohasznalat nil))
=>
	(printout t "Milyen legyen az autohasznalat? " crlf)
	(printout t "   konnyu/nehez " crlf)
	(modify ?m (autohasznalat (read))))

(defrule question-4 ""
        ?m <- (utazas (buszjaratok nil))
=>
	(printout t "Milyenek legyenek a buszjaratok? " crlf)
	(printout t "   atalgnaljobb/atlagos " crlf)
	(modify ?m (buszjaratok (read))))

(defrule question-5 ""
        ?m <- (utazas (hajojarat nil))
=>
	(printout t "Milyen legyen a hajojarat? " crlf)
	(printout t "   van/nincs " crlf)
	(modify ?m (hajojarat (read))))


(defrule question-6 ""
        ?m <- (utazas (vonathasznalat nil))
=>
	(printout t "Milyen legyen a vonathasznalat? " crlf)
	(printout t "   atalgnaljobb/atlagos " crlf)
	(modify ?m (vonathasznalat (read))))

(defrule question-7 ""
        ?m <- (utazas (programokszama nil))
=>
	(printout t "Milyen mennyisegü prgramok legyenek? " crlf)
	(printout t "   alacsony/kozepes/magas " crlf)
	(modify ?m (programokszama (read))))

(defrule question-8 ""
        ?m <- (utazas (nevezettesegekszama nil))
=>
	(printout t "Milyen mennyisegü nevezettesegek legyenek? " crlf)
	(printout t "   alacsony/kozepes/magas " crlf)
	(modify ?m (nevezettesegekszama (read))))

(defrule question-9 ""
        ?m <- (utazas (kirandulasilehetosegekszama nil))
=>
	(printout t "Milyen mennyisegü kirandulas lehetosegek legyenek? " crlf)
	(printout t "   alacsony/kozepes/magas " crlf)
	(modify ?m (kirandulasilehetosegekszama (read))))

(defrule question-10 ""
        ?m <- (utazas (helysegarak nil))
=>
	(printout t "Milyen arkategoriaju legyen az adott helyseg? " crlf)
	(printout t "   alacsony/kozepes/magas " crlf)
	(modify ?m (helysegarak (read))))

(defrule noresp ""
                (not (item $?))
=>
         (printout t "Ezekkel az elvarasokkal nem tudok telepulest ajanlani!" crlf)
         (halt)
    )
