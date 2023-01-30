## Table name: death

### Reading from ssdi2_clean_0_0.csv

![](../md_files/image31.png)

| Destination Field | Source field | Logic | Comment field |
| --- | --- | --- | --- |
| person_id | patient_deiden_id |  |  |
| death_id |  |  | Auto Increment |
| death_date | ssdi_death_date<br />death_censor_date |  | death_date is derived from ssdi_death_date. Please see the sheet map_table for additional mapping details.<br />If deadth_date is empty, consider death_censor_date to populate death_date field<br /> |
| death_datetime | ssdi_death_date<br />death_censor_date |  | Use ssdi_death_date to populate death_datetime and default the time to midnight.<br />If ssdi_death_date is empty, consider death_censor_date to populate death_datetime field<br /> |
| death_type_concept_id |  |  | Fill with 32885 ( US Social Security Death Master File) |
| cause_concept_id |  |  |  |
| cause_source_value |  |  |  |
| cause_source_concept_id |  |  |  |

