--Surgery statistic number for inpatient database.
--Num_of_surgeries 636907
--Num_of_encounters 285339
--Num_of_patients 191404

use IC3_INPATIENT_PIPELINE_2024;
WITH partitioned AS (
    SELECT
        vd.visit_detail_id,
        vd.visit_detail_start_datetime,
        vd.visit_detail_end_datetime,
        vo.visit_start_datetime,
        vo.visit_end_datetime 
    FROM
        [IC3_INPATIENT_PIPELINE_2024].CDM.VISIT_DETAIL vd
        INNER JOIN [IC3_INPATIENT_PIPELINE_2024].CDM.VISIT_OCCURRENCE vo ON vo.visit_occurrence_id = vd.visit_occurrence_id
    WHERE
        vd.visit_detail_id IN (
            SELECT
                vd.visit_detail_id
            FROM
                CDM.VISIT_DETAIL vd
                INNER JOIN CDM.VISIT_OCCURRENCE vo ON vo.visit_occurrence_id = vd.visit_occurrence_id
                INNER JOIN CDM.PERSON p ON vd.person_id = p.person_id
                INNER JOIN IC3.IC3_Variable_Lookup_Table l ON vo.visit_concept_id = l.concept_id
                    AND l.variable_name IN ('inpatient_hospital_encounter')              
            WHERE
                DATEDIFF(YEAR, p.birth_datetime, vo.visit_start_datetime) > 18
                AND vd.visit_detail_concept_id IN (
                    SELECT l3.concept_id 
                    FROM IC3.IC3_Variable_Lookup_Table l3 
                    WHERE l3.variable_name = 'surgery'
                )
                AND vo.visit_start_date > '2012-01-01'
        )),
result as (
SELECT
    p.visit_detail_id,
    p.visit_detail_start_datetime AS surgery_start,
    p.visit_detail_end_datetime AS surgery_end,
    p.visit_start_datetime,
    p.visit_end_datetime,
    visit_occurrence_id,
    person_id
FROM
    partitioned p
    left JOIN CDM.VISIT_DETAIL vd ON p.visit_detail_id = vd.visit_detail_id
	)

select count(distinct visit_detail_id) as Num_of_surgeries, count(distinct visit_occurrence_id)as Num_of_encounters, count(distinct person_id) as Num_of_patients
from result


	
--Surgery statistic number for idealist database.
--Num_of_surgeries 232805
--Num_of_encounters 187947
--Num_of_patients 136648
	
use IDEALIST;
with partitioned as (
SELECT -- TOP 400
    vd.visit_detail_id,
    vd.visit_detail_start_datetime,
    vd.visit_detail_end_datetime,
    vo.visit_start_datetime,
    vo.visit_end_datetime
FROM
    CDM.VISIT_DETAIL vd
    INNER JOIN CDM.VISIT_OCCURRENCE vo on vo.visit_occurrence_id = vd.visit_occurrence_id
WHERE
    vd.visit_detail_id IN (
        SELECT
            visit_detail_id
        FROm
                CDM.VISIT_DETAIL vd
                INNER JOIN CDM.VISIT_OCCURRENCE vo on vo.visit_occurrence_id = vd.visit_occurrence_id
                INNER JOIN CDM.PERSON p on vd.person_id = p.person_id
                INNER JOIN dbo.IC3_Variable_Lookup_Table l on (vo.visit_concept_id = l.concept_id
                                          AND l.variable_name IN ('inpatient_hospital_encounter'))
            WHERE
                DATEDIFF(YEAR, p.birth_datetime, vo.visit_start_datetime) > 18
                  AND vd.visit_detail_concept_id IN (
                    '2000000027','4021813')
                AND
                vo.visit_start_date > '2012-01-01'
				)),
result as (
SELECT
    p.visit_detail_id,
    p.visit_detail_start_datetime AS surgery_start,
    p.visit_detail_end_datetime AS surgery_end,
    p.visit_start_datetime,
    p.visit_end_datetime,
    visit_occurrence_id,
    person_id
FROM
    partitioned p
    left JOIN CDM.VISIT_DETAIL vd ON p.visit_detail_id = vd.visit_detail_id
	)

select count(distinct visit_detail_id) as Num_of_surgeries, count(distinct visit_occurrence_id)as Num_of_encounters, count(distinct person_id) as Num_of_patients
from result
