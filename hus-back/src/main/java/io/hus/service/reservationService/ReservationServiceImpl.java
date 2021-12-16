package io.hus.service.reservationService;

import io.hus.entity.reservationEntity.Reservation;

import io.hus.entity.userEntity.User;
import io.hus.repository.reservationService.ReservationRepository;
import io.hus.service.userService.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class ReservationServiceImpl implements ReservationService {

    final static Logger log = Logger.getLogger(ReservationService.class);

    @Autowired
    private ReservationRepository reservationRepository;
    private UserServiceImpl userService;

    @Override
    public Reservation createReservation(Reservation reservation) {
        log.info("Saving new reservation: " + reservation.getId() + " to the database");
        return reservationRepository.save(reservation);
    }

    @Override
    public Optional<Reservation> findReservationById(Long id) {
        log.info("Getting reservation with id " + id);
        return reservationRepository.findById(id);
    }

    @Override
    public void deleteReservation(Reservation reservation) {
        log.info("Deleting reservation: " + reservation.getId() + " from the database");
        reservationRepository.delete(reservation);
    }

    @Override
    public List<Reservation> findByUser(User user) {
        log.info("Getting reservations for user: " + user.getId());
        return reservationRepository.findByUser(user);
    }

    @Override
    public List<Reservation> findByProductId(Long productId) {
        log.info("Getting reservations for product: " + productId);
        return reservationRepository.findByProductId(productId);
    }

    @Override
    public List<Reservation> findByStatus(String status) {
        log.info("Getting reservations for state: " + status);
        return reservationRepository.findByStatus(status);
    }

    @Override
    public void updateStatus(Long id, String status) {
        log.info("Updating reservation state to 'confirmed' for reservation: " + id);
        Reservation reservation = reservationRepository.findById(id).get();
        reservation.setStatus(status);
        reservationRepository.save(reservation);
    }


}
