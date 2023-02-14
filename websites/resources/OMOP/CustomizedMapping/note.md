## Table name: note

### Reading from lab_notes_clean_0_0.csv

![](../md_files/image34.png)

| Destination Field | Source field | Logic | Comment field |
| --- | --- | --- | --- |
| person_id | patient_deiden_id |  |  |
| visit_occurrence_id | merged_enc_id |  |  |
| visit_detail_id | batch_visit_detail_id<br />encounter_deiden_id |  |  |
| note_id |  |  | Auto increment |
| note_event_id |  |  |  |
| note_event_field_concept_id |  |  |  |
| note_date | note_datetime |  |  |
| note_datetime | note_datetime |  |  |
| note_type_concept_id |  |  | Fill with EHR (32817) |
| note_class_concept_id |  |  | Fill with 706371 |
| note_title | note_title |  |  |
| note_text | lab_result |  |  |
| note_source_value | lab_result |  |  |
| encoding_concept_id |  |  | Fill with 0 |
| language_concept_id |  |  | Fill with 4180186 |
| provider_id |  |  |  |
| order_number |  |  |  |
| version_number |  |  |  |
| signer_provider_id |  |  |  |
| idr_note_id |  |  |  |

